"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivuVisibility = void 0;
class ActivuVisibility {
    description = {
        displayName: 'Activu Visibility',
        name: 'activuVisibility',
        icon: 'file:activu.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interact with Activu Visibility Nexus REST API for video wall management',
        defaults: {
            name: 'Activu Visibility',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'activuVisibilityApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: '={{$credentials.baseUrl}}',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            // ==================================
            //         Resource Selection
            // ==================================
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Wall',
                        value: 'wall',
                        description: 'Manage display walls',
                    },
                    {
                        name: 'Wall Source',
                        value: 'wallSource',
                        description: 'Manage sources on walls',
                    },
                    {
                        name: 'Layout',
                        value: 'layout',
                        description: 'Manage layouts and configurations',
                    },
                    {
                        name: 'Source',
                        value: 'source',
                        description: 'Manage video/content sources',
                    },
                    {
                        name: 'Template',
                        value: 'template',
                        description: 'Manage templates for wall layouts',
                    },
                    {
                        name: 'Space',
                        value: 'space',
                        description: 'Manage spaces (virtual canvases)',
                    },
                    {
                        name: 'Script',
                        value: 'script',
                        description: 'Manage and execute scripts',
                    },
                    {
                        name: 'Group',
                        value: 'group',
                        description: 'Manage groups',
                    },
                    {
                        name: 'Search',
                        value: 'search',
                        description: 'Search for resources',
                    },
                    {
                        name: 'Capture Client Stream',
                        value: 'captureClientStream',
                        description: 'Manage capture client RTSP streams',
                    },
                ],
                default: 'wall',
            },
            // ==================================
            //         Wall Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['wall'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all walls',
                        action: 'Get all walls',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/walls',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific wall by ID',
                        action: 'Get a wall',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}',
                            },
                        },
                    },
                    {
                        name: 'Load Layout',
                        value: 'loadLayout',
                        description: 'Load a layout onto a wall',
                        action: 'Load layout onto wall',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/loadlayout',
                                qs: {
                                    layoutId: '={{$parameter.layoutId}}',
                                    clearWall: '={{$parameter.clearWall}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Clear Layout',
                        value: 'clearLayout',
                        description: 'Clear a layout from a wall',
                        action: 'Clear layout from wall',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/layouts/{{$parameter.layoutId}}',
                            },
                        },
                    },
                    {
                        name: 'Get View Screen',
                        value: 'getViewScreen',
                        description: 'Get the current view screen of the wall',
                        action: 'Get view screen',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/viewscreen',
                            },
                        },
                    },
                    {
                        name: 'Set View Screen',
                        value: 'setViewScreen',
                        description: 'Change the current view screen of the wall',
                        action: 'Set view screen',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/viewscreen/{{$parameter.viewScreenId}}',
                            },
                        },
                    },
                    {
                        name: 'Clear View Screen',
                        value: 'clearViewScreen',
                        description: 'Clear a view screen of the wall',
                        action: 'Clear view screen',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/viewscreen/{{$parameter.viewScreenId}}',
                            },
                        },
                    },
                    {
                        name: 'Get Layouts',
                        value: 'getLayouts',
                        description: 'Get layouts loaded on the wall',
                        action: 'Get layouts on wall',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/layouts',
                            },
                        },
                    },
                    {
                        name: 'Get Templates',
                        value: 'getTemplates',
                        description: 'Get templates currently active on the wall',
                        action: 'Get templates on wall',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/templates',
                            },
                        },
                    },
                    {
                        name: 'Load Template',
                        value: 'loadTemplate',
                        description: 'Load a template onto the wall',
                        action: 'Load template onto wall',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/templates/{{$parameter.templateName}}',
                                qs: {
                                    viewScreenId: '={{$parameter.viewScreenId}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Clear Template',
                        value: 'clearTemplate',
                        description: 'Clear the current template on the wall',
                        action: 'Clear template from wall',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/templates/current',
                                qs: {
                                    viewScreenId: '={{$parameter.viewScreenId}}',
                                },
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Wall ID parameter
            {
                displayName: 'Wall ID',
                name: 'wallId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wall'],
                        operation: ['get', 'loadLayout', 'clearLayout', 'getViewScreen', 'setViewScreen', 'clearViewScreen', 'getLayouts', 'getTemplates', 'loadTemplate', 'clearTemplate'],
                    },
                },
                description: 'The ID of the wall (e.g., @NEXUS$123456789)',
            },
            // Layout ID for wall operations
            {
                displayName: 'Layout ID',
                name: 'layoutId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wall'],
                        operation: ['loadLayout', 'clearLayout'],
                    },
                },
                description: 'The ID of the layout',
            },
            // Clear wall option
            {
                displayName: 'Clear Wall First',
                name: 'clearWall',
                type: 'boolean',
                default: true,
                displayOptions: {
                    show: {
                        resource: ['wall'],
                        operation: ['loadLayout'],
                    },
                },
                description: 'Whether to clear the wall before loading the layout',
            },
            // View Screen ID
            {
                displayName: 'View Screen ID',
                name: 'viewScreenId',
                type: 'number',
                required: true,
                default: 1,
                displayOptions: {
                    show: {
                        resource: ['wall'],
                        operation: ['setViewScreen', 'clearViewScreen', 'loadTemplate', 'clearTemplate'],
                    },
                },
                description: 'The view screen index (starting at 1). Use 0 to clear all view screens.',
            },
            // Template name for wall operations
            {
                displayName: 'Template Name',
                name: 'templateName',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wall'],
                        operation: ['loadTemplate'],
                    },
                },
                description: 'The name of the template to load',
            },
            // ==================================
            //         Wall Source Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all sources on the wall',
                        action: 'Get all wall sources',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific source from the wall',
                        action: 'Get a wall source',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/{{$parameter.sourceInstanceId}}',
                            },
                        },
                    },
                    {
                        name: 'Add',
                        value: 'add',
                        description: 'Add a source to the wall',
                        action: 'Add source to wall',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources',
                                body: {
                                    sourceId: '={{$parameter.sourceId}}',
                                    viewScreenId: '={{$parameter.viewScreenId}}',
                                    region: {
                                        x: '={{$parameter.regionX}}',
                                        y: '={{$parameter.regionY}}',
                                        width: '={{$parameter.regionWidth}}',
                                        height: '={{$parameter.regionHeight}}',
                                    },
                                },
                            },
                        },
                    },
                    {
                        name: 'Remove',
                        value: 'remove',
                        description: 'Remove a source from the wall',
                        action: 'Remove source from wall',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/{{$parameter.sourceInstanceId}}',
                            },
                        },
                    },
                    {
                        name: 'Transform',
                        value: 'transform',
                        description: 'Move/resize a source on the wall',
                        action: 'Transform source on wall',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/{{$parameter.sourceInstanceId}}/transform',
                                body: {
                                    sourceId: '={{$parameter.sourceId}}',
                                    apiRegion: {
                                        x: '={{$parameter.regionX}}',
                                        y: '={{$parameter.regionY}}',
                                        width: '={{$parameter.regionWidth}}',
                                        height: '={{$parameter.regionHeight}}',
                                    },
                                },
                            },
                        },
                    },
                    {
                        name: 'Set Volume',
                        value: 'setVolume',
                        description: 'Set volume for a source on the wall',
                        action: 'Set source volume',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/{{$parameter.sourceInstanceId}}/volume',
                                qs: {
                                    volume: '={{$parameter.volume}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Mute',
                        value: 'mute',
                        description: 'Mute/unmute a source on the wall',
                        action: 'Mute source',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/{{$parameter.sourceInstanceId}}/mute',
                                qs: {
                                    mute: '={{$parameter.mute}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Swap',
                        value: 'swap',
                        description: 'Swap sources between positions',
                        action: 'Swap sources',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '=/api/v1/walls/{{$parameter.wallId}}/sources/swap',
                                body: {
                                    viewScreenId: '={{$parameter.viewScreenId}}',
                                    positionId1: '={{$parameter.positionId1}}',
                                    positionId2: '={{$parameter.positionId2}}',
                                },
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Wall ID for wall source operations
            {
                displayName: 'Wall ID',
                name: 'wallId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                    },
                },
                description: 'The ID of the wall',
            },
            // Source Instance ID
            {
                displayName: 'Source Instance ID',
                name: 'sourceInstanceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['get', 'remove', 'transform', 'setVolume', 'mute'],
                    },
                },
                description: 'The instance ID of the source on the wall',
            },
            // Source ID for adding
            {
                displayName: 'Source ID',
                name: 'sourceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'transform'],
                    },
                },
                description: 'The ID of the source to add',
            },
            // View Screen ID for wall source
            {
                displayName: 'View Screen ID',
                name: 'viewScreenId',
                type: 'number',
                required: true,
                default: 1,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'swap'],
                    },
                },
                description: 'The view screen index (starting at 1)',
            },
            // Region coordinates
            {
                displayName: 'X Position',
                name: 'regionX',
                type: 'number',
                default: 0,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'transform'],
                    },
                },
                description: 'X coordinate of the source',
            },
            {
                displayName: 'Y Position',
                name: 'regionY',
                type: 'number',
                default: 0,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'transform'],
                    },
                },
                description: 'Y coordinate of the source',
            },
            {
                displayName: 'Width',
                name: 'regionWidth',
                type: 'number',
                default: 1920,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'transform'],
                    },
                },
                description: 'Width of the source',
            },
            {
                displayName: 'Height',
                name: 'regionHeight',
                type: 'number',
                default: 1080,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['add', 'transform'],
                    },
                },
                description: 'Height of the source',
            },
            // Volume
            {
                displayName: 'Volume',
                name: 'volume',
                type: 'number',
                default: 50,
                typeOptions: {
                    minValue: 0,
                    maxValue: 100,
                },
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['setVolume'],
                    },
                },
                description: 'Volume level (0-100)',
            },
            // Mute toggle
            {
                displayName: 'Mute',
                name: 'mute',
                type: 'boolean',
                default: true,
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['mute'],
                    },
                },
                description: 'Whether to mute the source',
            },
            // Position IDs for swap
            {
                displayName: 'Position ID 1',
                name: 'positionId1',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['swap'],
                    },
                },
                description: 'The first position ID to swap',
            },
            {
                displayName: 'Position ID 2',
                name: 'positionId2',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['wallSource'],
                        operation: ['swap'],
                    },
                },
                description: 'The second position ID to swap',
            },
            // ==================================
            //         Layout Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['layout'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all layouts',
                        action: 'Get all layouts',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/layouts',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific layout by ID',
                        action: 'Get a layout',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}',
                            },
                        },
                    },
                    {
                        name: 'Get Bulk',
                        value: 'getBulk',
                        description: 'Get multiple layouts by IDs',
                        action: 'Get multiple layouts',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/layouts/bulk',
                                qs: {
                                    layoutIds: '={{$parameter.layoutIds}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new layout',
                        action: 'Create a layout',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/api/v1/layouts',
                            },
                        },
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a layout',
                        action: 'Update a layout',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}',
                            },
                        },
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a layout',
                        action: 'Delete a layout',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}',
                            },
                        },
                    },
                    {
                        name: 'Get Groups',
                        value: 'getGroups',
                        description: 'Get groups that have access to a layout',
                        action: 'Get layout groups',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}/groups',
                            },
                        },
                    },
                    {
                        name: 'Add to Groups',
                        value: 'addToGroups',
                        description: 'Add a layout to groups',
                        action: 'Add layout to groups',
                        routing: {
                            request: {
                                method: 'PATCH',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}/groups',
                                qs: {
                                    groupIds: '={{$parameter.groupIds}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Remove from Groups',
                        value: 'removeFromGroups',
                        description: 'Remove a layout from groups',
                        action: 'Remove layout from groups',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/layouts/{{$parameter.layoutId}}/groups',
                                qs: {
                                    groupIds: '={{$parameter.groupIds}}',
                                },
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Layout ID parameter
            {
                displayName: 'Layout ID',
                name: 'layoutId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['layout'],
                        operation: ['get', 'update', 'delete', 'getGroups', 'addToGroups', 'removeFromGroups'],
                    },
                },
                description: 'The ID of the layout',
            },
            // Layout IDs for bulk
            {
                displayName: 'Layout IDs',
                name: 'layoutIds',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['layout'],
                        operation: ['getBulk'],
                    },
                },
                description: 'Comma-separated list of layout IDs',
            },
            // Group IDs
            {
                displayName: 'Group IDs',
                name: 'groupIds',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['layout'],
                        operation: ['addToGroups', 'removeFromGroups'],
                    },
                },
                description: 'Comma-separated list of group IDs',
            },
            // Layout body for create/update
            {
                displayName: 'Layout Data',
                name: 'layoutData',
                type: 'json',
                default: '{}',
                displayOptions: {
                    show: {
                        resource: ['layout'],
                        operation: ['create', 'update'],
                    },
                },
                description: 'Layout data as JSON (name, path, target, canvasSize, scaling, sourceInstances)',
                routing: {
                    send: {
                        type: 'body',
                        property: '',
                    },
                },
            },
            // ==================================
            //         Source Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['source'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all sources',
                        action: 'Get all sources',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/sources',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific source by ID',
                        action: 'Get a source',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/sources/{{$parameter.sourceId}}',
                            },
                        },
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new source',
                        action: 'Create a source',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/api/v1/sources',
                            },
                        },
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update an existing source',
                        action: 'Update a source',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '/api/v1/sources',
                            },
                        },
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a source',
                        action: 'Delete a source',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/sources/{{$parameter.sourceId}}',
                            },
                        },
                    },
                    {
                        name: 'Rename',
                        value: 'rename',
                        description: 'Rename a source',
                        action: 'Rename a source',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/sources/{{$parameter.sourceId}}/rename',
                                qs: {
                                    newName: '={{$parameter.newName}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Duplicate',
                        value: 'duplicate',
                        description: 'Duplicate a source',
                        action: 'Duplicate a source',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/sources/{{$parameter.sourceId}}/duplicate',
                                qs: {
                                    newName: '={{$parameter.newName}}',
                                },
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Source ID parameter
            {
                displayName: 'Source ID',
                name: 'sourceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['source'],
                        operation: ['get', 'delete', 'rename', 'duplicate'],
                    },
                },
                description: 'The ID of the source',
            },
            // Source type filter
            {
                displayName: 'Source Type Filter',
                name: 'sourceType',
                type: 'string',
                default: '',
                displayOptions: {
                    show: {
                        resource: ['source'],
                        operation: ['getAll'],
                    },
                },
                description: 'Filter sources by type (optional)',
                routing: {
                    send: {
                        type: 'query',
                        property: 'type',
                    },
                },
            },
            // New name for rename/duplicate
            {
                displayName: 'New Name',
                name: 'newName',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['source'],
                        operation: ['rename', 'duplicate'],
                    },
                },
                description: 'The new name for the source',
            },
            // Source data for create/update
            {
                displayName: 'Source Data',
                name: 'sourceData',
                type: 'json',
                default: '{}',
                displayOptions: {
                    show: {
                        resource: ['source'],
                        operation: ['create', 'update'],
                    },
                },
                description: 'Source data as JSON (name, sourceType, address, displaySize, etc.)',
                routing: {
                    send: {
                        type: 'body',
                        property: '',
                    },
                },
            },
            // ==================================
            //         Template Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['template'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all templates',
                        action: 'Get all templates',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/templates',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific template by ID',
                        action: 'Get a template',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/templates/{{$parameter.templateId}}',
                            },
                        },
                    },
                    {
                        name: 'Get Bulk',
                        value: 'getBulk',
                        description: 'Get multiple templates by IDs',
                        action: 'Get multiple templates',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/templates/bulk',
                                qs: {
                                    templateIds: '={{$parameter.templateIds}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new template',
                        action: 'Create a template',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/api/v1/templates',
                            },
                        },
                    },
                    {
                        name: 'Create Grid',
                        value: 'createGrid',
                        description: 'Create a template using a grid',
                        action: 'Create a grid template',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/api/v1/templates/grid',
                                body: {
                                    name: '={{$parameter.gridTemplateName}}',
                                    wallId: '={{$parameter.gridWallId}}',
                                    rows: '={{$parameter.rows}}',
                                    columns: '={{$parameter.columns}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a template',
                        action: 'Delete a template',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/templates/{{$parameter.templateId}}',
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Template ID parameter
            {
                displayName: 'Template ID',
                name: 'templateId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['get', 'delete'],
                    },
                },
                description: 'The ID of the template',
            },
            // Template IDs for bulk
            {
                displayName: 'Template IDs',
                name: 'templateIds',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['getBulk'],
                    },
                },
                description: 'Comma-separated list of template IDs',
            },
            // Grid template parameters
            {
                displayName: 'Template Name',
                name: 'gridTemplateName',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['createGrid'],
                    },
                },
                description: 'The name of the template',
            },
            {
                displayName: 'Wall ID',
                name: 'gridWallId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['createGrid'],
                    },
                },
                description: 'The wall ID for the template',
            },
            {
                displayName: 'Rows',
                name: 'rows',
                type: 'number',
                required: true,
                default: 2,
                typeOptions: {
                    minValue: 1,
                    maxValue: 255,
                },
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['createGrid'],
                    },
                },
                description: 'Number of rows in the grid',
            },
            {
                displayName: 'Columns',
                name: 'columns',
                type: 'number',
                required: true,
                default: 2,
                typeOptions: {
                    minValue: 1,
                    maxValue: 255,
                },
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['createGrid'],
                    },
                },
                description: 'Number of columns in the grid',
            },
            // Template data for create
            {
                displayName: 'Template Data',
                name: 'templateData',
                type: 'json',
                default: '{}',
                displayOptions: {
                    show: {
                        resource: ['template'],
                        operation: ['create'],
                    },
                },
                description: 'Template data as JSON (name, wallId, positions)',
                routing: {
                    send: {
                        type: 'body',
                        property: '',
                    },
                },
            },
            // ==================================
            //         Space Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['space'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all spaces',
                        action: 'Get all spaces',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/spaces',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get a specific space by ID',
                        action: 'Get a space',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}',
                            },
                        },
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create a new space',
                        action: 'Create a space',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/api/v1/spaces',
                                body: {
                                    name: '={{$parameter.spaceName}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Update',
                        value: 'update',
                        description: 'Update a space',
                        action: 'Update a space',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}',
                            },
                        },
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Delete a space',
                        action: 'Delete a space',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}',
                            },
                        },
                    },
                    {
                        name: 'Get Sources',
                        value: 'getSources',
                        description: 'Get sources in a space',
                        action: 'Get space sources',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}/sources',
                            },
                        },
                    },
                    {
                        name: 'Add Source',
                        value: 'addSource',
                        description: 'Add a source to a space',
                        action: 'Add source to space',
                        routing: {
                            request: {
                                method: 'PATCH',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}/sources/{{$parameter.spaceSourceId}}',
                            },
                        },
                    },
                    {
                        name: 'Remove Source',
                        value: 'removeSource',
                        description: 'Remove a source from a space',
                        action: 'Remove source from space',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}/sources/{{$parameter.spaceSourceInstanceId}}',
                            },
                        },
                    },
                    {
                        name: 'Clear Sources',
                        value: 'clearSources',
                        description: 'Remove all sources from a space',
                        action: 'Clear space sources',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}/sources',
                            },
                        },
                    },
                    {
                        name: 'Auto Arrange',
                        value: 'autoArrange',
                        description: 'Auto-arrange sources in a space',
                        action: 'Auto arrange sources',
                        routing: {
                            request: {
                                method: 'PATCH',
                                url: '=/api/v1/spaces/{{$parameter.spaceId}}/sources',
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Space ID parameter
            {
                displayName: 'Space ID',
                name: 'spaceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['space'],
                        operation: ['get', 'update', 'delete', 'getSources', 'addSource', 'removeSource', 'clearSources', 'autoArrange'],
                    },
                },
                description: 'The ID of the space',
            },
            // Space name for create
            {
                displayName: 'Space Name',
                name: 'spaceName',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['space'],
                        operation: ['create'],
                    },
                },
                description: 'The name of the new space',
            },
            // Source ID for space operations
            {
                displayName: 'Source ID',
                name: 'spaceSourceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['space'],
                        operation: ['addSource'],
                    },
                },
                description: 'The ID of the source to add',
            },
            // Source instance ID for space operations
            {
                displayName: 'Source Instance ID',
                name: 'spaceSourceInstanceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['space'],
                        operation: ['removeSource'],
                    },
                },
                description: 'The instance ID of the source to remove',
            },
            // Space data for update
            {
                displayName: 'Space Data',
                name: 'spaceData',
                type: 'json',
                default: '{}',
                displayOptions: {
                    show: {
                        resource: ['space'],
                        operation: ['update'],
                    },
                },
                description: 'Space data as JSON (name, publicityMode, maxNumberOfSources, editMode)',
                routing: {
                    send: {
                        type: 'body',
                        property: '',
                    },
                },
            },
            // ==================================
            //         Script Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['script'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all scripts',
                        action: 'Get all scripts',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/scripts',
                            },
                        },
                    },
                    {
                        name: 'Get Running Jobs',
                        value: 'getJobs',
                        description: 'Get list of running script jobs',
                        action: 'Get running jobs',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/scripts/jobs',
                            },
                        },
                    },
                    {
                        name: 'Execute',
                        value: 'execute',
                        description: 'Execute a script',
                        action: 'Execute a script',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/scripts/{{$parameter.scriptId}}/execute',
                            },
                        },
                    },
                    {
                        name: 'Execute With Parameters',
                        value: 'executeWithParams',
                        description: 'Execute a script with parameters',
                        action: 'Execute script with parameters',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/scripts/{{$parameter.scriptId}}/executeWithParameters',
                            },
                        },
                    },
                    {
                        name: 'Terminate',
                        value: 'terminate',
                        description: 'Terminate a running script job',
                        action: 'Terminate a script',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/scripts/{{$parameter.jobId}}/terminate',
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Script ID parameter
            {
                displayName: 'Script ID',
                name: 'scriptId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['script'],
                        operation: ['execute', 'executeWithParams'],
                    },
                },
                description: 'The ID of the script (e.g., @NEXUS$123456789)',
            },
            // Job ID parameter
            {
                displayName: 'Job ID',
                name: 'jobId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['script'],
                        operation: ['terminate'],
                    },
                },
                description: 'The job ID to terminate',
            },
            // Script parameters
            {
                displayName: 'Script Parameters',
                name: 'scriptParams',
                type: 'json',
                default: '[]',
                displayOptions: {
                    show: {
                        resource: ['script'],
                        operation: ['executeWithParams'],
                    },
                },
                description: 'Parameters to pass to the script as JSON array',
                routing: {
                    send: {
                        type: 'body',
                        property: '',
                    },
                },
            },
            // ==================================
            //         Group Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['group'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all groups (except admin)',
                        action: 'Get all groups',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/groups',
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // ==================================
            //         Search Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['search'],
                    },
                },
                options: [
                    {
                        name: 'Search',
                        value: 'search',
                        description: 'Search for resources by name and ID',
                        action: 'Search resources',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/search/{{$parameter.searchTerm}}',
                            },
                        },
                    },
                ],
                default: 'search',
            },
            // Search term
            {
                displayName: 'Search Term',
                name: 'searchTerm',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['search'],
                        operation: ['search'],
                    },
                },
                description: 'The term to search for',
            },
            // Search options
            {
                displayName: 'Search Options',
                name: 'searchOptions',
                type: 'collection',
                placeholder: 'Add Option',
                default: {},
                displayOptions: {
                    show: {
                        resource: ['search'],
                        operation: ['search'],
                    },
                },
                options: [
                    {
                        displayName: 'Resource Types',
                        name: 'type',
                        type: 'multiOptions',
                        options: [
                            { name: 'Source', value: 'source' },
                            { name: 'Display', value: 'display' },
                            { name: 'Space', value: 'space' },
                            { name: 'Folder', value: 'folder' },
                            { name: 'Layout', value: 'layout' },
                            { name: 'Template', value: 'template' },
                            { name: 'Script', value: 'script' },
                            { name: 'Action Panel', value: 'actionPanel' },
                        ],
                        default: [],
                        description: 'Filter by resource types',
                        routing: {
                            send: {
                                type: 'query',
                                property: 'type',
                            },
                        },
                    },
                    {
                        displayName: 'Skip',
                        name: 'skip',
                        type: 'number',
                        default: 0,
                        description: 'Number of results to skip (for pagination)',
                        routing: {
                            send: {
                                type: 'query',
                                property: 'skip',
                            },
                        },
                    },
                    {
                        displayName: 'Take',
                        name: 'take',
                        type: 'number',
                        default: 100,
                        description: 'Number of results to return (max 1000)',
                        routing: {
                            send: {
                                type: 'query',
                                property: 'take',
                            },
                        },
                    },
                    {
                        displayName: 'Exact Match',
                        name: 'exact',
                        type: 'boolean',
                        default: false,
                        description: 'Whether to require exact match of names and IDs',
                        routing: {
                            send: {
                                type: 'query',
                                property: 'exact',
                            },
                        },
                    },
                    {
                        displayName: 'Order By',
                        name: 'orderBy',
                        type: 'options',
                        options: [
                            { name: 'Ascending', value: 'ascending' },
                            { name: 'Descending', value: 'descending' },
                        ],
                        default: 'ascending',
                        description: 'Order of results',
                        routing: {
                            send: {
                                type: 'query',
                                property: 'orderBy',
                            },
                        },
                    },
                ],
            },
            // ==================================
            //     Capture Client Stream Operations
            // ==================================
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: ['captureClientStream'],
                    },
                },
                options: [
                    {
                        name: 'Get All',
                        value: 'getAll',
                        description: 'Get all active RTSP streams',
                        action: 'Get all streams',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '/api/v1/capture-client/streams',
                            },
                        },
                    },
                    {
                        name: 'Get',
                        value: 'get',
                        description: 'Get streams by source ID',
                        action: 'Get streams by source',
                        routing: {
                            request: {
                                method: 'GET',
                                url: '=/api/v1/capture-client/streams/{{$parameter.captureSourceId}}',
                            },
                        },
                    },
                    {
                        name: 'Create',
                        value: 'create',
                        description: 'Create an RTSP stream',
                        action: 'Create a stream',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '=/api/v1/capture-client/streams/{{$parameter.captureSourceId}}',
                                body: {
                                    streamIdentifier: '={{$parameter.streamIdentifier}}',
                                },
                            },
                        },
                    },
                    {
                        name: 'Delete',
                        value: 'delete',
                        description: 'Remove an active RTSP stream',
                        action: 'Delete a stream',
                        routing: {
                            request: {
                                method: 'DELETE',
                                url: '=/api/v1/capture-client/streams/{{$parameter.streamId}}',
                            },
                        },
                    },
                ],
                default: 'getAll',
            },
            // Source ID for capture client
            {
                displayName: 'Source ID',
                name: 'captureSourceId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['captureClientStream'],
                        operation: ['get', 'create'],
                    },
                },
                description: 'The source identifier',
            },
            // Stream identifier
            {
                displayName: 'Stream Identifier',
                name: 'streamIdentifier',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['captureClientStream'],
                        operation: ['create'],
                    },
                },
                description: 'The RTSP stream identifier',
            },
            // Stream ID for delete
            {
                displayName: 'Stream ID',
                name: 'streamId',
                type: 'string',
                required: true,
                default: '',
                displayOptions: {
                    show: {
                        resource: ['captureClientStream'],
                        operation: ['delete'],
                    },
                },
                description: 'The stream identifier to delete',
            },
            // Region of interest for stream
            {
                displayName: 'Region of Interest',
                name: 'regionOfInterest',
                type: 'collection',
                placeholder: 'Add Region',
                default: {},
                displayOptions: {
                    show: {
                        resource: ['captureClientStream'],
                        operation: ['create'],
                    },
                },
                options: [
                    {
                        displayName: 'X',
                        name: 'x',
                        type: 'number',
                        default: 0,
                        routing: {
                            send: {
                                type: 'body',
                                property: 'regionOfInterest.x',
                            },
                        },
                    },
                    {
                        displayName: 'Y',
                        name: 'y',
                        type: 'number',
                        default: 0,
                        routing: {
                            send: {
                                type: 'body',
                                property: 'regionOfInterest.y',
                            },
                        },
                    },
                    {
                        displayName: 'Width',
                        name: 'width',
                        type: 'number',
                        default: 1920,
                        routing: {
                            send: {
                                type: 'body',
                                property: 'regionOfInterest.width',
                            },
                        },
                    },
                    {
                        displayName: 'Height',
                        name: 'height',
                        type: 'number',
                        default: 1080,
                        routing: {
                            send: {
                                type: 'body',
                                property: 'regionOfInterest.height',
                            },
                        },
                    },
                ],
            },
        ],
    };
}
exports.ActivuVisibility = ActivuVisibility;
