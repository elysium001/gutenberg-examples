import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import metadata from './block.json';

const save = () => null;

registerBlockType(metadata.name, {
    ...metadata,
    edit: () => {

        const { currentUserRole, currentUserCapabilities } = useSelect((select) => {
            return {
                currentUserRole: select('core').getCurrentUser()?.roles,
                currentUserCapabilities: select('core').getCurrentUser()?.capabilities,
            };
        });

        return (
            <>
                <InspectorControls>
                    <PanelBody title="User Role">
                        {currentUserRole?.includes('administrator') && (
                            <p>Only administrators can see this message</p>
                        )}

                        {currentUserRole?.includes('editor') && (
                            <p>Only editors can see this message</p>
                        )}

                        {/* if currentUserRole does not exist */}
                        {!currentUserRole && (
                            <p>Only logged in users can see this message</p>
                        )}
                    </PanelBody>
                </InspectorControls>

                <div>
                    <h2>User Permission Based Block</h2>
                    <p>Everyone can see this message</p>
                </div>
            </>
        );
    },
    save,
});