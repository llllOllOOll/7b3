


/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: [
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'plugin:import/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['packages/*/tsconfig.json', 'apps/*/tsconfig.json'],
	},
	plugins: [
		'@typescript-eslint',
		'import',
		'unused-imports',
		'prettier',
		'eslint-plugin-react',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'avoid',
				bracketSameLine: false,
				bracketSpacing: true,
				embeddedLanguageFormatting: 'auto',
				endOfLine: 'lf',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				jsxSingleQuote: false,
				printWidth: 80,
				proseWrap: 'always',
				quoteProps: 'as-needed',
				requirePragma: false,
				semi: false,
				singleAttributePerLine: false,
				singleQuote: true,
				tabWidth: 2,
				trailingComma: 'all',
				useTabs: true,
				overrides: [
					{
						files: ['**/*.json'],
						options: {
							useTabs: false,
						},
					},
				],
				plugins: ['prettier-plugin-tailwindcss'],
			},
		],

		'import/no-unresolved': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'no-unused-vars': 'off',
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'unknown',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				pathGroups: [
					{
						pattern: 'react*',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin', 'react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true, 
			},
		],
	},
	root: true,
}

// npm install --save-dev eslint-config-prettier eslint-plugin-unused-imports@^2.0.0 eslint-plugin-prettier@latest
   