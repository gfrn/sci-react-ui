Scientific React UI
===================

Scientific React UI components, based on MUI.

Initial code. No components yet.

See tools.md for list of tools used in this library

Build
-----
Build with rollup

	pnpm run rollup

Publish
-------

...

Test
----

- First make sure you have built the package.
- And create a **separate** app to test in.

You can then use this package directly from the source by linking in the other app:

	pnpm link <path-to-this-app-folder>

Although this seems to have problems with react versions... so you may have to pack it then install it:

In this folder:

	pnpm pack

In the other app:

	pnpm install <path-to-this-app-folder>/diamondlightsource-sci-react-ui-0.0.1.tgz


### Usage

	Currently you'll have to add a theme, like so:

```typeScript jsx

	import {ThemeProvider, CssBaseline} from "@mui/material";
	import {BasicButton, DiamondTheme} from "@diamondlightsource/sci-react-ui";
  
	function App() {
    
    	return <ThemeProvider theme={DiamondTheme}>
    		<CssBaseline/>
			<BasicButton variant={"contained"}>A button</BasicButton>
    	</ThemeProvider>
    }

```