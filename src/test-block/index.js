// register_block 
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';

console.log('Hello, from test-block/index.js!');

const Edit = () => <p { ...useBlockProps() }>Hello World - Block Editor</p>;
// const save = () => <p { ...useBlockProps.save() }>Hello World - Frontend</p>;
const save = () => null;

registerBlockType( metadata.name, {
	edit: Edit,
	save,
} );