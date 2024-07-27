import { defineConfig } from "@/node_modules/sanity/lib/index";
import {deskTool} from "@/node_modules/sanity/desk";
import schemas from "./sanity/schemas/index";


export default defineConfig({
    projectId:"3yuzvwrf",
    dataset:"production",
    title: "shiv website",
    apiVersion:"2024-07-16",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})