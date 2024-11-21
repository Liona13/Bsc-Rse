import { Code } from './Code'
import { Pre } from './Pre'
import { Heading } from './Heading'
import { Paragraph } from './Paragraph'
import { List } from './List'
import { Image } from './Image'
import { Blockquote } from './Blockquote'
import { Table, TableHead, TableBody, TableRow, TableCell } from './Table'
import { InlineCode } from './InlineCode'
import { Callout } from './Callout'
import { Tabs } from './Tabs'
import { Accordion } from './Accordion'
import { Timeline } from './Timeline'
import { Card } from './Card'
import { Chart } from './Chart'
import { Diagram } from './Diagram'
import { CodeTabs } from './CodeTabs'
import { MermaidDiagram } from './MermaidDiagram'

export const MDXComponents = {
  h1: (props: any) => <Heading as="h1" {...props} />,
  h2: (props: any) => <Heading as="h2" {...props} />,
  h3: (props: any) => <Heading as="h3" {...props} />,
  p: Paragraph,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode,
  ul: List,
  ol: (props: any) => <List ordered {...props} />,
  img: Image,
  blockquote: Blockquote,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: (props: any) => <TableCell header {...props} />,
  td: TableCell,
  Callout: Callout,
  Tabs: Tabs,
  Accordion: Accordion,
  Timeline: Timeline,
  Card: Card,
  Chart: Chart,
  Diagram: Diagram,
  CodeTabs: CodeTabs,
  MermaidDiagram: MermaidDiagram
} 