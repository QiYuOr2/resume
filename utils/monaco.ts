export async function createMonaco() {
  if (window.monaco) {
    return {
      monaco: window.monaco
    };
  }

  const monaco = await import('monaco-editor');

  window.monaco = monaco;


  // await Promise.all([

  // ])


  return { monaco }
}