import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@rajkumar_dev_15/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

// Middleware to check if the user is authenticated

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();

  const { success } = signupInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({ message: 'Inputs are not correct' });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
      jwt: token,
    });

  } catch (error) {
    console.error('Error creating user:', error);
    c.status(500);
    return c.json({ error: 'Internal server error' });
  }
});

// export default userRouter;

// Signin route
    
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
  
    if (!success) {
      c.status(411);
      return c.json({ message: 'Inputs are not correct' });
    }
  
    const prisma = new PrismaClient({
      // @ts-ignore
      datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
  
      // If user doesn't exist or password doesn't match
      if (!user || user.password !== body.password) {
        c.status(403);
        return c.json({ error: "Invalid email or password" });
      }
  
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt });
    } catch (error) {
      console.error("Error signing in:", error);
      c.status(500);
      return c.json({ error: "Internal server error" });
    }
  });
  

 
  