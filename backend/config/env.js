import { config } from "dotenv";

config({path: `.env.${process.NODE_ENV || 'development'}.local`})

export const { PORT, NODE_ENV, MONGODB_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env