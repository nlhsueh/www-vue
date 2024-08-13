
## Install

```
npm init vue@latest
```
Will generate the project folders and files.


### 1. **`public` Folder**
   - **Purpose**: The `public` folder is where you place static assets that should not be processed by the build tool (Vite). These assets are served directly without any transformations.
   - **Contents**:
     - `index.html`: This is the main HTML file that serves as the entry point for your Vue app. During the build process, Vite injects the script and link tags needed for your app.
     - Other assets: Any other files (like images, icons, etc.) that you place in the `public` folder will be copied as-is to the final build output.

### 2. **`jsconfig.json`**
   - **Purpose**: This file is used to configure JavaScript (or TypeScript) settings within your project, particularly for editor tooling. It helps with features like path aliases, IntelliSense, and auto-completions in VSCode or similar editors.
   - **Contents**:
     - `"compilerOptions"`: Configures various options like module resolution, base URL, and paths for your project.
       - `"@/*": ["./src/*"]`: This line creates a path alias, where @/ maps to the ./src/ directory.
       - For example, instead of writing import MyComponent from '../../components/MyComponent.vue', you can write import MyComponent from '@/components/MyComponent.vue'.
     - `"include"`: Specifies the files or directories to be included in the project for type checking and IntelliSense.
     - `exclude`: The exclude option specifies files and directories that should be excluded from type checking, IntelliSense, and other editor tooling.

### 3. **`package.json`**
   - **Purpose**: This is the core configuration file for your project’s dependencies, scripts, and metadata. It defines the dependencies your project needs, the scripts you can run, and other metadata like the project name, version, and author.
   - **Key Sections**:
     - `"dependencies"`: Lists the packages required for your app to run.
     - `"devDependencies"`: Lists the packages required only during development (like Vite, linters, etc.).
     - `"scripts"`: Defines commands you can run using `npm run <script-name>`. Common scripts include `dev` (to start the development server), `build` (to create a production build), and `serve` (to serve the production build locally).

### 4. **`vite.config.js`**
   - **Purpose**: This file configures Vite, the build tool for your Vue project. It allows you to customize the build process, define path aliases, configure plugins, and set environment variables.
   - **Contents**:
     - **`plugins`**: This is where you specify any Vite plugins, such as `@vitejs/plugin-vue` for handling Vue SFCs.
     - **`resolve.alias`**: You can define path aliases here to make importing files easier.
     - **`server` and `build` options**: Configure development server settings (like port, proxy, etc.) and build options (like output directory, minification, etc.).

These files and folders form the backbone of your Vue project setup, providing configuration for how the app is built, served, and structured during development and in production.


```
npm project
```