import type * as e from 'monaco-editor'
import type { Environment } from 'monaco-editor/esm/vs/editor/editor.api'

declare interface Window {
  monaco: typeof e | undefined
  MonacoEnvironment: Environment
}

declare global {
  interface Window {
    monaco: typeof e | undefined
    MonacoEnvironment: Environment
  }
}