body, html {
    height: 100%;
    width: 100%;
    background-color: #000;
    overflow: hidden;
}

::-webkit-scrollbar {
    width: 16px;
}
::-webkit-scrollbar-track {
    background-color: #020;
}
::-webkit-scrollbar-thumb {
    background-color: #0a0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
}
::-webkit-scrollbar-button {
    background-color: #0a0;
    border-right: 1px solid black;
}
::-webkit-scrollbar-corner {
    background-color: black;
}

#terminal {
    border: 1px solid #0f0;
    width: -webkit-calc(100% - 20px);
    width: -moz-calc(100% - 20px);
    width: calc(100% - 20px);
    
    height: -webkit-calc(100% - 20px);
    height: -moz-calc(100% - 20px);
    height: calc(100% - 20px);
    
    margin: 0 auto;
    position: absolute;
    background-color: #000;
    color: #0f0;
    font-family: Courier ,monospace;
    font-size: 18px;
    overflow: auto;
}

#current-line {
    color: #0f0;
}

#terminal a {
    color: #0f0;
    text-decoration: none;
}

#terminal a:hover {
    text-decoration: underline;
}

.terminal-cursor {
    background-color: #0f0;
    color: #000;
}

.reverse {
    background-color: #0f0;
    color: #000;
}
