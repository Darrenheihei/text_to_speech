import React from "react"
import { createRoot } from 'react-dom/client';
import BlogPost from "./BlogPost"

const root = createRoot(document.getElementById('root'))
root.render(<BlogPost />)