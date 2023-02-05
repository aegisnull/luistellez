import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import './Code.scss';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Code = ({ children, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const setCopied = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 800);
  };

  return (
    <div className='code'>
      <div className='code__icons'>
        <CopyToClipboard text={children}>
          <button onClick={() => setCopied()}>
            {isCopied ? (
              <span title='Copied!' style={{ color: 'white' }}>
                Copied
              </span>
            ) : (
              <span title='Copy to Clipboard' style={{ color: 'white' }}>
                Copy code
              </span>
            )}
          </button>
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter language={language} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
