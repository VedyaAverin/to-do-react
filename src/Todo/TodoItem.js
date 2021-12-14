import React, {useContext} from "react";
import PropTypes from "prop-types"
import Context from "../context";
import {IconButton, Checkbox, makeStyles, Typography, List, Container} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    li: {
        width: '100%',
        maxWidth: 460 + "px",
        display: 'flex',
        padding: 0
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 0
    },
    pf: {
        paddingLeft: 0
    },
    done: {
        textDecoration: 'line-through'
    }
}))


function TodoItem({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    const classes = []
    const classesItem = useStyles();

    if(todo.completed) {
        classes.push(classesItem.done)
    }
    


    return (
        <List className = {classesItem.li} >
            <Container className={classesItem.item}>
                <Container className={classesItem.pf}>
                    <Checkbox
                        color = 'primary'
                        inputProps={{ 'aria-label': 'uncontrolled-checkbox'}} 
                        checked={todo.completed}
                        onChange={() => onChange(todo.id)}
                    />
                    <Typography variant="caption" className={classes}>
                        <strong>{index + 1}</strong>
                        &nbsp;
                        {todo.title}
                    </Typography>
                </Container>
            <IconButton 
                color = 'secondary'
                onClick={removeTodo.bind(null, todo.id)}
                aria-label="delete"
            >
            <DeleteIcon />
            </IconButton>
            </Container>
        </List>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem