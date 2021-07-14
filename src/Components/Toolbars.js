import React from "react";

import {
  addColumn,
  addRow,
  BalloonToolbar,
  deleteColumn,
  deleteRow,
  deleteTable,
  ELEMENT_ALIGN_CENTER,
  ELEMENT_ALIGN_JUSTIFY,
  ELEMENT_ALIGN_RIGHT,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_CODE_BLOCK,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  ELEMENT_OL,
  ELEMENT_UL,
  insertTable,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_KBD,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  ToolbarAlign,
  ToolbarCodeBlock,
  ToolbarElement,
  ToolbarList,
  ToolbarMark,
  ToolbarTable,
  ToolbarLink,
  ToolbarImage,
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  MARK_HIGHLIGHT,
} from "@udecode/slate-plugins";

import { H1 } from "@styled-icons/remix-editor/H1";
import { H2 } from "@styled-icons/remix-editor/H2";
import { DoubleQuotesR } from "@styled-icons/remix-editor/DoubleQuotesR";
import { CodeView } from "@styled-icons/remix-editor/CodeView";
import { Bold } from "@styled-icons/remix-editor/Bold";
import { Italic } from "@styled-icons/remix-editor/Italic";
import { Underline } from "@styled-icons/remix-editor/Underline";
import {ListUnordered} from "@styled-icons/remix-editor/ListUnordered";
import {ListOrdered} from "@styled-icons/remix-editor/ListOrdered";
import {AlignLeft} from "@styled-icons/remix-editor/AlignLeft";
import {AlignRight} from "@styled-icons/remix-editor/AlignRight";
import {AlignCenter} from "@styled-icons/remix-editor/AlignCenter";
import {AlignJustify} from "@styled-icons/remix-editor/AlignJustify";

export const ToolbarButtonsBasicElements = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <>
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H1)}
        icon={<H1 />}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_H2)}
        icon={<H2 />}
      />
      <ToolbarElement
        type={getSlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<DoubleQuotesR />}
      />
      <ToolbarCodeBlock
        type={getSlatePluginType(editor, ELEMENT_CODE_BLOCK)}
        icon={<CodeView />}
      />
    </>
  );
};

export const ToolbarButtonsBasicMarks = () => {
  const editor = useStoreEditorRef(useEventEditorId("focus"));
  return (
    <>

    <div style={{borderLeft: "1px solid lightgrey", minHeight: 30, marginLeft: 5, marginRight: 5}}></div>
    
      <ToolbarMark
        type={getSlatePluginType(editor, MARK_BOLD)}
        icon={<Bold />}
      />

      <ToolbarMark
        type={getSlatePluginType(editor, MARK_ITALIC)}
        icon={<Italic />}
      />

      <ToolbarMark
        type={getSlatePluginType(editor, MARK_UNDERLINE)}
        icon={<Underline />}
      />
    </>
  );
};

export const ToolbarButtonsAlign = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))

  return (
    <>
    <div style={{borderLeft: "1px solid lightgrey", minHeight: 30, marginLeft: 5, marginRight: 5}}></div>
      <ToolbarAlign icon={<AlignLeft />} />
      <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_CENTER)}
        icon={<AlignCenter />}
      />
      <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_RIGHT)}
        icon={<AlignRight />}
      />
      <ToolbarAlign
        type={getSlatePluginType(editor, ELEMENT_ALIGN_JUSTIFY)}
        icon={<AlignJustify />}
      />
    </>
  )
}

export const ToolbarButtonsList = () => {
  const editor = useStoreEditorRef(useEventEditorId('focus'))

  return (

    
    <>
    
      <ToolbarList
        type={getSlatePluginType(editor, ELEMENT_UL)}
        icon={<ListUnordered />}
      />
      <ToolbarList
        type={getSlatePluginType(editor, ELEMENT_OL)}
        icon={<ListOrdered />}
      />
    </>
  )
}

export const ToolbarButtons = () => {
  return (
    <>
      
        <ToolbarButtonsBasicElements />
        <ToolbarButtonsBasicMarks />
        <ToolbarButtonsList />
        <ToolbarButtonsAlign />
    
    </>
  );
};
