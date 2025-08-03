import z from "zod";

 //zod schemas for validation 
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name : z.string().optional()
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    
})

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string().min(1, "Content is required"),
}); 

export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string().min(1, "Content is required"),
    id: z.number()
}); 


//inference types 
export type signupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>
export type createBlogInput = z.infer<typeof createBlogInput>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;