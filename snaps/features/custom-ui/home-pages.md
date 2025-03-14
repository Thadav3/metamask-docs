---
description: Display a dedicated UI page in MetaMask for your Snap.
sidebar_position: 3
---

# Home pages

You can display a dedicated UI, or "home page," for your Snap within MetaMask.
This is useful for introducing your Snap to end users.
Users can access your home page through the Snaps menu in MetaMask.
Snap home pages can contain [custom UI](index.md) and [interactive UI](interactive-ui.md)
components.

## Steps

### 1. Request permission to display a home page

Request the [`endowment:page-home`](../../reference/permissions.md#endowmentpage-home) permission.
Add the following to your Snap's manifest file:

```json title="snap.manifest.json"
"initialPermissions": {
  "endowment:page-home": {}
}
```

### 2. Create a home page

Expose an [`onHomePage`](../../reference/entry-points.md#onhomepage) entry point, which returns the
custom or interactive UI to be shown.
MetaMask calls this method when a user selects your Snap name in the Snaps menu.

The following example displays custom UI that welcomes the user to the Snap's home page:

```tsx title="index.tsx"
import type { OnHomePageHandler } from "@metamask/snaps-sdk";
import { Box, Heading, Text } from "@metamask/snaps-sdk/jsx";

export const onHomePage: OnHomePageHandler = async () => {
  return {
    content: (
      <Box>
        <Heading>Hello world!</Heading>
        <Text>Welcome to my Snap home page!</Text>
      </Box>
    ),
  };
};
```

<p align="center">
<img src={require("../../assets/home-page.png").default} alt="Home page example" width="360px" class="appScreen" />
</p>

## Example

See the [`@metamask/home-page-example-snap`](https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/home-page)
package for a full example of implementing a Snap home page.
