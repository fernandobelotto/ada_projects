const downloadDeArquivo = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
    URL.revokeObjectURL(a.href);
  };
    
  document.querySelector('#save').addEventListener('click', () => {
    const textArea = document.querySelector('textarea');
    
    const input = document.querySelector('input');

    downloadDeArquivo(textArea.value, `${input.value}.txt`, 'text/plain');
  });