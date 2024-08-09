// register_block 
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import metadata from './block.json';
import { createBlock } from '@wordpress/blocks';

const Edit = (props) => {

    const { attributes, setAttributes, clientId, placeholder } = props;

    const blockProps = useBlockProps();

    // useDispatch core/block-editor to insert a new block.
    const { insertDefaultBlock } = wp.data.dispatch('core/block-editor');

    // Function to handle key down event if enter to add a new block.
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            insertDefaultBlock();
        }
    };

    return (
            <RichText { ...blockProps }
                tagName="p"
                value={ attributes.content }
                onChange={ (content) => setAttributes({ content }) }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
                // disableLineBreaks={true}
                // onKeyDown={onKeyDown}
                multiline="p" // deprecated
                placeholder={ 'Enter text here...' }
            />
    );
};

const save = ( { attributes } = props ) => {
    const blockProps = useBlockProps.save();
    return <RichText.Content { ...blockProps } tagName='p' value={ attributes.content } />;
}

// This block will be locked down to ancestor gutenberg-customizations/block-w-innerblocks. See block.json.
registerBlockType(metadata.name, {
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
    },
    transforms: {
        to: [
            {
                type: 'block',
                blocks: ['core/list'],
                transform: ({ content }) => {
                    // TODO: Fix this. It's not working.
                    return createBlock('core/list', { values: content });
                },
            },
        ],
    },
    edit: Edit,
    save
});