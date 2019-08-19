import React, {useState} from 'react';

const FormComponent = ({getData}) => {
    //state del componente
    // search = state, guardarState = this.setState({})
    const [search, setstate] = useState ({
        city: '',
        country: ''
    })

    const handleChange = e => {
        //Cambiar state
        setstate ({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const getWeather = e => {
        e.preventDefault();

        //Pasa al component principal la búsqueda
        getData(search);
    }
    return ( 
        <form onSubmit={getWeather}>
            <div className="input-field col s12">
                <input 
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
                />
                <label htmlFor="city">Ciudad </label>
            </div>
            <div className="input-field col s12">
                <select name="country" onChange={handleChange}>
                    <option value="">Selecciona un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="CO">Colombia</option>
                    <option value="MX">México</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" 
                className="waves-effect waves-light btn-large btn-block amber accent-4"
                value="Buscar Clima"/>
            </div>
        </form>
     );
}
 
export default FormComponent;