import React, {useState} from 'react'

export default function Window() {
        const [visible, setVisible] = useState(false)
        
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300){
            setVisible(true)
            }
         
        };
        window.addEventListener('scroll', toggleVisible);
    return (
        <div className="window" 	style={{display: visible ? 'inline' : 'none'}}>
            <a href="tel:537939011">
            Zadzwoń teraz!
            </a>
        </div>
    )
}
