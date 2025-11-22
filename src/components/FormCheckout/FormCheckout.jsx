import React from "react";

const FormCheckout =({dataForm , handleChangeInput , sendOrder}) => {
    return (
        <form onSubmit={sendOrder}>
                <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Ingrese su nombre"/>
                <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput}  placeholder="Ingrese su telefono"/>
                <input type="email" name="email" value={dataForm.emal} onChange={handleChangeInput} placeholder="Ingrese su email"/>

                <button type="submit">Enviar Orden</button>
            </form>
    )
}

export default FormCheckout