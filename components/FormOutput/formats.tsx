import { IFormContext } from '../../lib/context';
import {
    combinePickups,
    combineStates,
    fixCase,
    listify,
} from '../../lib/helpers';

const formats = [
    {
        name: "Hilding (That's the fact, Jack)",
        method: (form: IFormContext, other: IFormContext) => {
            let state = combineStates(form, other);

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
                tuningMachineBrands,
                tuningMachineModels,
                tuningMachineHeads,
            }: IFormContext = state;

            let pickups = combinePickups(
                pickupNeck,
                pickupMiddle,
                pickupBridge,
            );

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
                        fingerboard. Equipped with {pickups || 'PICKUPS'}.
                        Controlled by {fixCase(pots) || 'CONTROLS'} knob
                        {pots !== 'One Master Volume' ? 's' : null} and a{' '}
                        {fixCase(pickupSwitch) || 'SWITCH'}. The{' '}
                        {scaleLength || 'SCALELENGTH'} scale length neck has{' '}
                        {inlays
                            ? `${fixCase(inlays) || 'INLAYS'} inlays and `
                            : null}
                        {fixCase(frets) || 'FRETS'} frets with a{' '}
                        {fixCase(neckProfile) || 'NECKPROFILE'} neck profile.
                        The hardware is comprised of{' '}
                        {(fixCase(tuningMachineBrands) || 'TUNINGMACHINES') +
                            ' tuning machines, '}
                        a {fixCase(nut) || 'NUT'} nut,
                        {!hardware ? ` and` : null} a{' '}
                        {fixCase(bridge) || 'BRIDGE'}
                        {bridge.match('bridge') || bridge.match('Bridge')
                            ? null
                            : ` bridge`}
                        ,
                        {knobs
                            ? ` and ${(fixCase(knobs) || 'KNOBS') + ' knobs'}`
                            : null}
                        {pickguard
                            ? ` with a ${
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
                    {listify(state)}
                </div>
            );
        },
    },
];

export default formats;
