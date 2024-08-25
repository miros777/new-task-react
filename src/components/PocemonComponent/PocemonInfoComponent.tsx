import React, {FC} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {Link} from "react-router-dom";

type IProps = {
    pokemon: IPokemonInfo | null,
}
const PocemonInfoComponent: FC<IProps> = ({pokemon}: IProps) => {
    return (
        <div>
            <h2>{pokemon?.name}</h2>
            <h4>ability: {pokemon?.abilities.map((v, index) =>
                <div key={index}>
                    <div>slot: {v?.slot}</div>
                    <div>is_hidden: {v?.is_hidden}</div>
                    <div>ability.url: {v.ability?.url}</div>
                    <div>ability.name: {v.ability?.name}</div>
                </div>
            )}
            </h4>
            <div className="d-flex j-c-center f-column">
                <h4>forms:</h4>
                {pokemon?.forms.map((v, index) =>

                    <Link className="formBtn" to={`forms/?forms=${v.url}`} key={index}>{v.name}</Link>
                )}
            </div>
            <h4>stats: {pokemon?.stats.map((v, index) =>
                <div key={index}>
                    <h5>stat</h5>
                    <div>stat.url: {v.stat.url}</div>
                    <div>stat.name: {v.stat.name}</div>
                    <div>effort: {v.effort}</div>
                    <div>base_stat: {v.base_stat}</div>
                </div>
            )}
            </h4>
            <h4>stats: {pokemon?.types.map((v, index) =>
                <div key={index}>
                    <h5>slot</h5>
                    <div>slot: {v.slot}</div>
                    <div>type.url: {v.type.url}</div>
                    <div>type.name: {v.type.name}</div>
                </div>
            )}
            </h4>
        </div>
    );
};

export default PocemonInfoComponent;