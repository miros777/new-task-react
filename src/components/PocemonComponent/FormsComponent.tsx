import React, {FC} from 'react';
import {IForm} from "../../models/IForm";

type IProps = {
    dataForm: IForm | null
}
const FormsComponent = ({dataForm}:IProps) => {

    return (
        <div className="cardFormPakemon">
            <div>id: {dataForm?.id}</div>
            <div>name: {dataForm?.name}</div>
            <div>{dataForm?.pokemon.name?.name}</div>
            <div>{dataForm?.pokemon.name?.url}</div>
            <div>form_order: {dataForm?.form_order}</div>
            <div>{dataForm?.types.map((v, index) =>
                <div key={index}>
                    <h4>types {index}</h4>
                    <div>slot: {v.slot}</div>
                    <div>type.name: {v.type.name}</div>
                    <div>type.url: {v.type.url}</div><br/>
                </div>
            )}
            </div>
            <div>is_battle_only: {dataForm?.is_battle_only}</div>
            <div>is_default: {dataForm?.is_default}</div>
            <div>is_mega: {dataForm?.is_mega}</div>
            <div>order: {dataForm?.order}</div>
            <div className="cardPhotos">
                <div><img src={dataForm?.sprites.back_default} alt=""/></div>
                <div><img src={dataForm?.sprites.back_female} alt=""/></div>
                <div><img src={dataForm?.sprites.back_shiny} alt=""/></div>
                <div><img src={dataForm?.sprites.back_shiny_female} alt=""/></div>
                <div><img src={dataForm?.sprites.front_default} alt=""/></div>
                <div><img src={dataForm?.sprites.front_shiny} alt=""/></div>
                <div><img src={dataForm?.sprites.front_female} alt=""/></div>
                <div><img src={dataForm?.sprites.front_shiny_female} alt=""/></div>
            </div>
        </div>
    );
};

export default FormsComponent;