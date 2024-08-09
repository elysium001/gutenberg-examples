// register_block 
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import metadata from './block.json';
import { InnerBlocks } from '@wordpress/block-editor';

// import scss
import './index.css';

const Edit = () => {
	const blockProps = useBlockProps( { className: 'custom-block-w-innerblocks' } );

	// const allowedBlocks = [ 'core/list', 'core/heading', 'gutenberg-customizations/custom-richtext-block' ];
	const allowedBlocks = [ 'core/list', 'core/heading', 'core/paragraph' ];

	const DEFAULT_BLOCK = { 
		name: 'gutenberg-customizations/custom-richtext-block', 
		attributes: { 
			content: 'Lorem ipsum...' 
		},
		
	};

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ allowedBlocks }
				// defaultBlock={ DEFAULT_BLOCK }
    			// directInsert={ true }
			/>
		</div>
	);
};

const save = () => <InnerBlocks.Content />;

registerBlockType( metadata.name, {
	edit: Edit,
	save
} );
