import React, {FC} from 'react';
import {IForm} from "../../models/IForm";

type IProps = {
    dataForm: IForm | null
}
const FormsComponent:FC<IProps> = ({dataForm}:IProps) => {

    return (
        <div className="cardFormPakemon">
            <h2>{dataForm?.name}</h2>
            <div>form_order: {dataForm?.form_order}</div>
            <div>{dataForm?.types.map((v, index) =>
                <div key={index}>
                    <h3>types {index +1}</h3>
                    <div>slot: {v.slot}</div>
                    <div>name: {v.type.name}</div>
                    <div>{v.type.url}</div><br/>
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