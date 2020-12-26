import React from 'react'
import { useGlobalDispatch } from "../..";
import { DarkModeReducer } from './DarkModeReducer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { Button } from '@material-ui/core';

export const DarkModeSwitch = () => {
    const dispatch = useGlobalDispatch();
    return (
        <Button onClick={() => dispatch(DarkModeReducer.actions.toggle())}>
            <EmojiObjectsIcon />
        </Button>
    )
}