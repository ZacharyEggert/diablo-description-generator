import { IFormContext } from '../../lib/context';
import { formLabelPrettier } from '../../lib/options';
import { fixCase } from '../../lib/helpers';

const formats = [
    {
        name: 'Hilding (Dry)',
        method: (form: IFormContext, other: IFormContext) => {
            let state = {} as IFormContext;
            for (let key in form) {
                if (form[key] !== '' && form[key] !== 'sel') {
                    state[key] = form[key];
                } else {
                    state[key] = other[key];
                }
                if (key === 'radius') {
                    state[key] = `${form[key]} ${other[key]}`;
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
                pickupConfiguration,
                pickupNeck,
                pickupMiddle,
                pickupBridge,
                pickguard,
                pots,
                coilTap,
                killSwitch,
                phaseSwitch,
                bridge,
                guitarCase,
                hardware,
                knobs,
                modifications,
                otherFeatures,
                stringGauge,
                pickupSwitch,
                tuningMachines,
            }: IFormContext = state;

            let pickups = `${
                !!pickupNeck ? `${pickupNeck} in the neck position, ` : ''
            }${
                !!pickupMiddle ? `${pickupMiddle} in the middle position, ` : ''
            }${
                !!pickupNeck ? 'and ' : ''
            }${pickupBridge} in the bridge position`;

            return (
                <div>
                    <p className='mb-8'>
                        {make || 'MAKE'} {model || 'MODEL'} {subModel || ''} in{' '}
                        {finish || 'FINISH'} finish made in {year || 'YEAR'}
                        {guitarCase ? ` with ${guitarCase || 'CASE'}` : null}.
                        This guitar features a {fixCase(bodyType) || 'BODYTYPE'}{' '}
                        {fixCase(bodyWood) || 'BODYWOOD'} body,{' '}
                        {/**neckFinish?`${neckFinish || 'NECKFINISH'} `:null*/}
                        {fixCase(neckWood) || 'NECKWOOD'} neck and{' '}
                        {neckWood.toUpperCase() !== fingerBoard.toUpperCase()
                            ? `${fixCase(fingerBoard) || 'FINGERBOARD'} `
                            : null}
                        fingerboard. Equipped with{' '}
                        {fixCase(pickups) || 'PICKUPS'}. Controlled by{' '}
                        {fixCase(pots) || 'CONTROLS'} knob
                        {pots !== 'One Master Volume' ? 's' : null} and a{' '}
                        {fixCase(pickupSwitch) || 'SWITCH'}. The{' '}
                        {scaleLength || 'SCALELENGTH'} scale length neck has{' '}
                        {inlays
                            ? `${fixCase(inlays) || 'INLAYS'} inlays and `
                            : null}
                        {fixCase(frets) || 'FRETS'} frets with a{' '}
                        {fixCase(neckProfile) || 'NECKPROFILE'} neck profile.
                        The hardware is comprised of{' '}
                        {(fixCase(tuningMachines) || 'TUNINGMACHINES') +
                            ' tuning machines, '}
                        a {fixCase(nut) || 'NUT'} nut,
                        {!hardware ? ` and` : null} a{' '}
                        {fixCase(bridge) || 'BRIDGE'}
                        {bridge.match('bridge') || bridge.match('Bridge')
                            ? null
                            : ` bridge`}
                        ,
                        {knobs
                            ? ` with ${(fixCase(knobs) || 'KNOBS') + ' knobs'}`
                            : null}
                        {pickguard
                            ? ` on a ${
                                  fixCase(pickguard) || 'PICKGUARD'
                              } pickguard`
                            : null}
                        .
                        <br />
                        <br />
                        <span>
                            Guitar is freshly setup and restrung with{' '}
                            {stringGauge || 'GAUGE'} strings
                            {guitarCase
                                ? ` and includes ${
                                      fixCase(guitarCase) || 'CASE'
                                  }`
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
