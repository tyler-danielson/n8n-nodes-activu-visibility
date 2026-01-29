"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivuVisibilityApi = void 0;
class ActivuVisibilityApi {
    name = 'activuVisibilityApi';
    displayName = 'Activu Visibility API';
    documentationUrl = 'https://docs.activu.com';
    properties = [
        {
            displayName: 'Base URL',
            name: 'baseUrl',
            type: 'string',
            default: 'https://activudemo.vis-ability.cloud:59081',
            placeholder: 'https://your-activu-instance:port',
            description: 'The base URL of your Activu Visibility Nexus API instance',
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            description: 'The API key for authentication (x-api-key header)',
        },
    ];
    // Use x-api-key header authentication as per Activu API spec
    authenticate = {
        type: 'generic',
        properties: {
            headers: {
                'x-api-key': '={{$credentials.apiKey}}',
            },
        },
    };
    // Test the credentials by fetching walls list
    test = {
        request: {
            baseURL: '={{$credentials.baseUrl}}',
            url: '/api/v1/walls',
            method: 'GET',
        },
    };
}
exports.ActivuVisibilityApi = ActivuVisibilityApi;
