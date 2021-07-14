import ReactDOM from "react-dom";
import React, { useState, useMemo } from "react";

import styled from "styled-components";

import {
  ELEMENT_IMAGE,
  ELEMENT_PARAGRAPH,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  HeadingToolbar,
  MentionSelect,
  SlatePlugin,
  SlatePlugins,
  ToolbarSearchHighlight,
  createAlignPlugin,
  createAutoformatPlugin,
  createBlockquotePlugin,
  createBoldPlugin,
  createCodeBlockPlugin,
  createCodePlugin,
  createExitBreakPlugin,
  createHeadingPlugin,
  createHighlightPlugin,
  createHistoryPlugin,
  createKbdPlugin,
  createImagePlugin,
  createItalicPlugin,
  createLinkPlugin,
  createListPlugin,
  createMediaEmbedPlugin,
  createNodeIdPlugin,
  createParagraphPlugin,
  createReactPlugin,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createTrailingBlockPlugin,
  createUnderlinePlugin,
  createDeserializeHTMLPlugin,
  useFindReplacePlugin,
  useMentionPlugin,
  withProps,
  MentionElement,
  ELEMENT_MENTION,
  SPEditor,
  removeBlocksAndFocus
} from "@udecode/slate-plugins";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { ToolbarButtons } from "./Toolbars";
import { withStyledDraggables } from './withStyledDraggables'

const editorID = "Sample Editor";

let components = createSlatePluginsComponents();
components = withStyledDraggables(components)

const options = createSlatePluginsOptions({
  // customize your options by plugin key
});



const editableProps = {
  placeholder: "Enter some rich text…",
  spellCheck: false,
  padding: "0 30px",
};

const CustomToolbarContainer = styled.div`
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin:0 auto;
  padding: 1rem;
  position: sticky;
  top: 10px; /* required */
  z-index: 99;
  background-color: white;
  max-width: 400px;
  align-content: center;
`;
function MainEditor() {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("SlateEditorContent")) || [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ]
  );

  const plugins = useMemo(
    () => {
      const p = [
        createReactPlugin(),
        createHistoryPlugin(),
        createParagraphPlugin(),
        createBlockquotePlugin(),
        createTodoListPlugin(),
        createHeadingPlugin(),
        createImagePlugin(),
        createLinkPlugin(),
        createListPlugin(),
        createTablePlugin(),
        createMediaEmbedPlugin(),
        createCodeBlockPlugin(),
        createAlignPlugin(),
        createBoldPlugin(),
        createCodePlugin(),
        createItalicPlugin(),
        createHighlightPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createKbdPlugin(),
        createNodeIdPlugin(),
        //   createAutoformatPlugin(optionsAutoformat),
        //   createResetNodePlugin(optionsResetBlockTypePlugin),
        //   createSoftBreakPlugin(optionsSoftBreakPlugin),
        //   createExitBreakPlugin(optionsExitBreakPlugin),
        //   createTrailingBlockPlugin({
        //     type: ELEMENT_PARAGRAPH,
        //   }),
        //   createSelectOnBackspacePlugin({
        //     allow: [ELEMENT_IMAGE, ELEMENT_EXCALIDRAW],
        //   }),
        //   mentionPlugin,
        //   searchHighlightPlugin,
      ];

      p.push(createDeserializeHTMLPlugin({ plugins: p }));

      return p;
    }
    //   [mentionPlugin, searchHighlightPlugin]
  );

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <SlatePlugins
          id={editorID}
          plugins={plugins}
          components={components}
          options={options}
          editableProps={editableProps}
          value={value}
          onChange={(value) => {
            // Save the value to Local Storage.
            const content = JSON.stringify(value);
            //console.log(content)
            localStorage.setItem("SlateEditorContent", content);
          }}
        >
          <CustomToolbarContainer>
            <HeadingToolbar>
              <ToolbarButtons />
            </HeadingToolbar>
          </CustomToolbarContainer>
        </SlatePlugins>
      </DndProvider>
    </>
  );
}

export default MainEditor;
