// R2D2 syntax highlighting definition
Prism.languages.r2d2 = {
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"])*"/,
    greedy: true
  },
  'keyword': {
    pattern: /\b(?:module|fn|var|if|else|for|while|return|match|struct|async|await|break|continue|import|null)\b/,
    greedy: true
  },
  'builtin': {
    pattern: /\b(?:int|string|float|bool|error|ok)\b/,
    greedy: true
  },
  'function': {
    pattern: /\b[a-z_]\w*(?=\s*\()/i,
    greedy: true
  },
  'number': {
    pattern: /\b(?:0x[\da-f]+|\d*\.?\d+)\b/i,
    greedy: true
  },
  'operator': {
    pattern: /[=!<>]=?|[+\-*/%]|\+\+|--|&&|\|\||=>|\.\.\.|\b(?:and|or|not)\b/,
    greedy: true
  },
  'punctuation': {
    pattern: /[{}[\];(),.:]/,
    greedy: true
  }
}; 