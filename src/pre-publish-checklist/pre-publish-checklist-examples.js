import { registerPlugin } from '@wordpress/plugins';
import { PluginPrePublishPanel } from '@wordpress/edit-post';
import { useDispatch } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';


const PluginPrePublishPanelTest = () => { 

    const { lockPostSaving, unlockPostSaving } = useDispatch( 'core/editor' );

    // useSelect postStatus, isPublishSidebarOpened, contentLength
    const { postStatus, isPublishSidebarOpened, contentLength } = useSelect( ( select ) => {
        const { getEditedPostAttribute } = select( 'core/editor' );
        const { isPublishSidebarOpened } = select( 'core/edit-post' );
        const content = getEditedPostAttribute( 'content' );
        return {
            postStatus: getEditedPostAttribute( 'status' ),
            isPublishSidebarOpened,
            contentLength: content ? content.length : 0,
        };
    });

    useEffect( () => {
        console.log( 'isPublishSidebarOpened', isPublishSidebarOpened );
        console.log( 'postStatus', postStatus );
        console.log( 'contentLength', contentLength );
        if ( isPublishSidebarOpened && postStatus !== 'publish' && contentLength < 400 ) {
            lockPostSaving( 'prePublishChecklist' );
        } else {
            unlockPostSaving( 'prePublishChecklist' );
        }
    }, [ isPublishSidebarOpened, postStatus, contentLength, lockPostSaving, unlockPostSaving ] );

    return (
        <PluginPrePublishPanel
            title="Pre-Publish Checklist"
            initialOpen={ true }
        >
            { contentLength < 400 && <p>Content length is less than 400 words</p>}
            <p>Checklist Item 2</p>
            <p>Checklist Item 3</p>
        </PluginPrePublishPanel>
    );

}

registerPlugin( 'pre-publish-panel-test', {
    render: PluginPrePublishPanelTest,
} );