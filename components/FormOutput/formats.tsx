import { IFormContext } from '../../lib/context';
import { formLabelPrettier } from '../../lib/options';

const formats = [
    {
        name: 'Hilding (Dry)',
        method: (form: IFormContext, other: IFormContext) => {
            let state = {} as IFormContext;
            for (let key in form) {
                if (form[key] !== '' && form[key] !== 'sel') {
                    state[key] = form[key];
                } else {
                    state[key] = other[key] ?? '';
                }
            }

            let {
                make,
                model,
                subModel,
                year,
                finish,
                countryOfOrigin,
                serial,
                condition,
                weight,
                bodyType,
                bodyWood,
                scaleLength,
                neckJoint,
                neckWood,
                neckFinish,
                fingerBoard,
                radius,
                neckProfile,
                inlays,
                nutWidth,
                nut,
                frets,
                pickups,
                pickupConfiguration,
                pickguard,
                controls,
                bridge,
                guitarCase,
                hardware,
                knobs,
                modifications,
                otherFeatures,
                stringGauge,
                switches,
                tuningMachines,
            }: IFormContext = state;

            return (
                <div>
                    <p className='mb-8'>
                        {make || 'MAKE'} {model || 'MODEL'} {finish || 'FINISH'}{' '}
                        {year || 'YEAR'}
                        {guitarCase ? ` with ${guitarCase || 'CASE'}` : null}.
                        <br />
                        <br />
                        This guitar features a {bodyType || 'BODYTYPE'}{' '}
                        {bodyWood || 'BODYWOOD'} body,{' '}
                        {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}
                        {neckWood || 'NECKWOOD'} neck and{' '}
                        {neckWood.toUpperCase() !== fingerBoard.toUpperCase()
                            ? `${fingerBoard || 'FINGERBOARD'} `
                            : null}
                        fingerboard. Equipped with {pickups || 'PICKUPS'}.
                        Controlled by {controls || 'CONTROLS'} knob
                        {controls !== 'One Master Volume' ? 's' : null} and{' '}
                        {switches || 'SWITCH'}. The{' '}
                        {scaleLength || 'SCALELENGTH'}&quot; scale length neck
                        has{' '}
                        {inlays ? `${inlays || 'INLAYS'} inlays and ` : null}
                        {frets || 'FRETS'} frets with a{' '}
                        {neckProfile || 'NECKPROFILE'} neck profile. The
                        hardware is comprised of{' '}
                        {(tuningMachines || 'TUNINGMACHINES') +
                            ' tuning machines, '}
                        a {nut || 'NUT'} Nut,{!hardware ? ` and` : null} a{' '}
                        {bridge || 'BRIDGE'}
                        {bridge.match('bridge') || bridge.match('Bridge')
                            ? null
                            : ` bridge`}
                        ,
                        {knobs
                            ? ` with ${(knobs || 'KNOBS') + ' Knobs'}`
                            : null}
                        {pickguard
                            ? ` on a ${pickguard || 'PICKGUARD'} pickguard`
                            : null}
                        .
                        <br />
                        <br />
                        <span>
                            Guitar is freshly setup and restrung with{' '}
                            {stringGauge || 'GAUGE'} strings
                            {guitarCase
                                ? ` and includes ${guitarCase || 'CASE'}`
                                : null}
                            .
                        </span>
                    </p>
                    <ul className='list-disc'>
                        {Object.keys(state).map((data, i) =>
                            data === 'name'
                                ? null
                                : state[data] &&
                                  state[data] !== '' && (
                                      <li className='' key={'li' + data}>
                                          {formLabelPrettier[data]}:{' '}
                                          {state[data]}
                                          {data === 'scaleLength' ||
                                          data === 'nutWidth'
                                              ? `"`
                                              : null}
                                      </li>
                                  )
                        )}
                    </ul>
                </div>
            );
        },
    },
];

export default formats;
