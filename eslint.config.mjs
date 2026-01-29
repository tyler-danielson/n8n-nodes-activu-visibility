import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import n8nNodesBase from 'eslint-plugin-n8n-nodes-base';

export default [
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'n8n-nodes-base': n8nNodesBase,
		},
		rules: {
			...n8nNodesBase.configs.nodes.rules,
			...n8nNodesBase.configs.credentials.rules,
		},
	},
	{
		ignores: ['dist/**/*', 'node_modules/**/*'],
	},
];
