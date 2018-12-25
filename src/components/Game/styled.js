import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import ReactPlayer from 'react-player';

export const Text = styled.div`
    font-family: corbel;
    text-indent: 1.5em;
`;

export const Poem = styled.div`
    font-style: italic;
    text-align: center;
    font-family: corbel;
    line-height: 0.5em;
`;

export const Player = styled(ReactPlayer)`
    width: 100% !important;
    margin-top: 40px;
`;

export const ResetButton = styled(Button)`
    display: flex !important;
    margin: auto !important;
    margin-top: 10px !important;
    background: green !important;
    color: white !important;

    &: hover {
        background: darkgreen !important;
    }
`;
