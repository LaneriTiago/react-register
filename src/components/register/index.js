import React, { useState } from "react";
import {TextField, Button, Switch, FormControlLabel} from "@material-ui/core";

function Register (){


    const [nome, setNome] = useState ("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            console.log (nome)
        }}>
           <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                    if (nome.length > 5) {
                        setNome(nome.substr (0, 5));
                    }  
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                color="primary"
                margin="normal"
                fullWidth
            />

            <TextField
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                color="primary"
                margin="normal"
                fullWidth
            />

            <TextField
                id="cpf"
                label="CPF"
                variant="outlined"
                color="primary"
                margin="normal"
                fullWidth
            />
            
            <FormControlLabel 
                label="Promoções" 
                control={<Switch name="promocoes" defaultChecked color="primary"/>}
            />

            <FormControlLabel 
                label="Novidades" 
                control={<Switch name="novidades" defaultChecked color="primary"/>}
            />



            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}

export default Register