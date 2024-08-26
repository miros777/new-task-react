import React, {FC} from 'react';
import {IPokemonInfo} from "../../models/IPokemonInfo";
import {Link} from "react-router-dom";

type IProps = {
    pokemon: IPokemonInfo | null,
}
const PocemonInfoComponent: FC<IProps> = ({pokemon}) => {
    return (
        <div className="wrapper d-flex j-c-center f-column">
            <h1>{pokemon?.name}</h1>
            <div className="wrapper d-flex f-wrap j-c-between f-column">
                <div className="PocemonInfoForms">
                    <h2>Forms:</h2>
                    <div className="d-flex f-wrap j-c-center">
                    {pokemon?.forms.map((v, index) =>
                        <div key={index} className="infoPocemonItem">
                            <Link className="formBtn" to={`/pokemon/${pokemon?.name}/forms/?forms=${v.url}`}
                                  key={index}>{v.name}</Link>
                        </div>
                    )}
                    </div>
                </div>
                <div className="d-flex d-flex j-c-center f-wrap">
                    {pokemon?.abilities.map((v, index) =>
                        <div key={index} className="infoPocemonItem">
                            <h2>ability: </h2>
                            <div>slot: {v?.slot}</div>
                            <div>is_hidden: {v?.is_hidden}</div>
                            <div>{v.ability?.url}</div>
                            <div>name: {v.ability?.name}</div>
                        </div>
                    )}


                    {pokemon?.stats.map((v, index) =>
                        <div key={index} className="infoPocemonItem">
                            <h2>stat: </h2>
                            <div>{v.stat.url}</div>
                            <div>name: {v.stat.name}</div>
                            <div>effort: {v.effort}</div>
                            <div>base_stat: {v.base_stat}</div>
                        </div>
                    )}

                    {pokemon?.types.map((v, index) =>
                        <div key={index} className="infoPocemonItem">
                            <h2>slot</h2>
                            <div>slot: {v.slot}</div>
                            <div>{v.type.url}</div>
                            <div>type name: {v.type.name}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PocemonInfoComponent;