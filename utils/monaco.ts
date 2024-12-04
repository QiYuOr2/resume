export async function fetchDefault(url: string) {
  const response = await fetch(url);
  return await response.text();
}

export async function fetchDefaultMarkdown() {
  return await fetchDefault("/resume.md");
}

export async function fetchDefaultYaml() {
  return await fetchDefault("/resume.yml");
}

export async function createMonaco() {
  if (window.monaco) {
    return {
      monaco: window.monaco,
    };
  }

  const monaco = await import("monaco-editor");

  window.monaco = monaco;

  // await Promise.all([

  // ])

  return { monaco };
}
