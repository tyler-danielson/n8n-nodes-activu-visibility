import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ActivuVisibilityApi implements ICredentialType {
	name = 'activuVisibilityApi';
	displayName = 'Activu Visibility API';
	documentationUrl = 'https://docs.activu.com';
	
	properties: INodeProperties[] = [
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
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	// Test the credentials by fetching walls list
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/v1/walls',
			method: 'GET',
		},
	};
}
