import { useState } from "react";

// <h3 className="color-card-headline">{color.hex}</h3>
//kein Toggle

//useState function erstellen
//handleCopy erstellen


export default function CopyButton({ textToCopy }) {
    
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    }


return (
<>
<button className="copy-button" onClick={handleCopy}>
{copied ? "Succsesfully Copied" : "Copy"}
</button>
</>
)};