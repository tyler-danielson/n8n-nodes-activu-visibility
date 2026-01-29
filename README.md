# n8n-nodes-activu-visibility

This is an n8n community node for integrating with the **Activu Visibility Nexus REST API** - a video wall management system.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

### Community Nodes (Recommended)

1. Go to **Settings > Community Nodes**
2. Select **Install**
3. Enter `n8n-nodes-activu-visibility` in the **npm Package Name** field
4. Agree to the risks of using community nodes and click **Install**

### Manual Installation

To install this node manually, run the following command in your n8n installation directory:

```bash
npm install n8n-nodes-activu-visibility
```

## Credentials

This node requires an API key for authentication. Configure the following:

| Field | Description |
|-------|-------------|
| **Base URL** | The base URL of your Activu Visibility Nexus instance (e.g., `https://your-server:59081`) |
| **API Key** | Your API key for authentication (sent via `x-api-key` header) |

## Resources and Operations

### Wall
Manage display walls in your video wall system.

| Operation | Description |
|-----------|-------------|
| Get All | Get all walls |
| Get | Get a specific wall by ID |
| Load Layout | Load a layout onto a wall |
| Clear Layout | Clear a layout from a wall |
| Get View Screen | Get the current view screen of the wall |
| Set View Screen | Change the current view screen |
| Clear View Screen | Clear a view screen |
| Get Layouts | Get layouts loaded on the wall |
| Get Templates | Get templates currently active on the wall |
| Load Template | Load a template onto the wall |
| Clear Template | Clear the current template |

### Wall Source
Manage sources displayed on walls.

| Operation | Description |
|-----------|-------------|
| Get All | Get all sources on a wall |
| Get | Get a specific source from the wall |
| Add | Add a source to the wall |
| Remove | Remove a source from the wall |
| Transform | Move/resize a source on the wall |
| Set Volume | Set volume for a source |
| Mute | Mute/unmute a source |
| Swap | Swap sources between positions |

### Layout
Manage layouts and configurations.

| Operation | Description |
|-----------|-------------|
| Get All | Get all layouts |
| Get | Get a specific layout by ID |
| Get Bulk | Get multiple layouts by IDs |
| Create | Create a new layout |
| Update | Update a layout |
| Delete | Delete a layout |
| Get Groups | Get groups that have access to a layout |
| Add to Groups | Add a layout to groups |
| Remove from Groups | Remove a layout from groups |

### Source
Manage video/content sources.

| Operation | Description |
|-----------|-------------|
| Get All | Get all sources (optionally filter by type) |
| Get | Get a specific source by ID |
| Create | Create a new source |
| Update | Update an existing source |
| Delete | Delete a source |
| Rename | Rename a source |
| Duplicate | Duplicate a source |

### Template
Manage templates for wall layouts.

| Operation | Description |
|-----------|-------------|
| Get All | Get all templates |
| Get | Get a specific template by ID |
| Get Bulk | Get multiple templates by IDs |
| Create | Create a new template |
| Create Grid | Create a template using a grid layout |
| Delete | Delete a template |

### Space
Manage spaces (virtual canvases).

| Operation | Description |
|-----------|-------------|
| Get All | Get all spaces |
| Get | Get a specific space by ID |
| Create | Create a new space |
| Update | Update a space |
| Delete | Delete a space |
| Get Sources | Get sources in a space |
| Add Source | Add a source to a space |
| Remove Source | Remove a source from a space |
| Clear Sources | Remove all sources from a space |
| Auto Arrange | Auto-arrange sources in a space |

### Script
Manage and execute scripts.

| Operation | Description |
|-----------|-------------|
| Get All | Get all scripts |
| Get Running Jobs | Get list of running script jobs |
| Execute | Execute a script |
| Execute With Parameters | Execute a script with parameters |
| Terminate | Terminate a running script job |

### Group
Manage groups.

| Operation | Description |
|-----------|-------------|
| Get All | Get all groups (except admin) |

### Search
Search for resources.

| Operation | Description |
|-----------|-------------|
| Search | Search for resources by name and ID |

Search supports filtering by resource types: Source, Display, Space, Folder, Layout, Template, Script, Action Panel.

### Capture Client Stream
Manage capture client RTSP streams.

| Operation | Description |
|-----------|-------------|
| Get All | Get all active RTSP streams |
| Get | Get streams by source ID |
| Create | Create an RTSP stream |
| Delete | Remove an active RTSP stream |

## Example Workflows

### Load a Layout onto a Wall
```json
{
  "nodes": [
    {
      "parameters": {
        "resource": "wall",
        "operation": "loadLayout",
        "wallId": "@NEXUS$123456789",
        "layoutId": "layout-001",
        "clearWall": true
      },
      "name": "Load Morning Layout",
      "type": "n8n-nodes-activu-visibility.activuVisibility",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ]
}
```

### Add a Source to a Wall
```json
{
  "nodes": [
    {
      "parameters": {
        "resource": "wallSource",
        "operation": "add",
        "wallId": "@NEXUS$123456789",
        "sourceId": "@NEXUS$987654321",
        "viewScreenId": 1,
        "regionX": 0,
        "regionY": 0,
        "regionWidth": 1920,
        "regionHeight": 1080
      },
      "name": "Add Camera Feed",
      "type": "n8n-nodes-activu-visibility.activuVisibility",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ]
}
```

### Execute a Script
```json
{
  "nodes": [
    {
      "parameters": {
        "resource": "script",
        "operation": "execute",
        "scriptId": "@NEXUS$script123"
      },
      "name": "Run Automation Script",
      "type": "n8n-nodes-activu-visibility.activuVisibility",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ]
}
```

### Create a Grid Template
```json
{
  "nodes": [
    {
      "parameters": {
        "resource": "template",
        "operation": "createGrid",
        "gridTemplateName": "4x4 Grid",
        "gridWallId": "@NEXUS$123456789",
        "rows": 4,
        "columns": 4
      },
      "name": "Create 4x4 Template",
      "type": "n8n-nodes-activu-visibility.activuVisibility",
      "typeVersion": 1,
      "position": [250, 300]
    }
  ]
}
```

## Development

### Prerequisites
- Node.js 22+
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/tyler-danielson/n8n-nodes-activu-visibility.git
cd n8n-nodes-activu-visibility

# Install dependencies
npm install

# Build the project
npm run build

# Run n8n with the node loaded (development)
npm run dev
```

### Scripts
- `npm run dev` - Start n8n with the node loaded for development
- `npm run build` - Build the project
- `npm run lint` - Lint the codebase
- `npm run release` - Release a new version

## API Documentation

This node integrates with the Activu Visibility Nexus REST API. For complete API documentation, refer to the Swagger specification at your Activu instance:

```
https://your-activu-server:59081/swagger/v1/swagger.json
```

## License

[MIT](LICENSE.md)

## Links

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Activu Visibility](https://www.activu.com/)
