import React from 'react';

const DilutionResult = () => <p>Dilution from mixing (%) <output /> - expected range</p>;

const VolumeResult = () => <p>Final Volume <output /> - expected range</p>;

const EthanolResult = () => <p>Ethanol (%abv) <output /> - expected range</p>;

const SugarResult = () => <p>Sugar (g/100ml) <output /> - expected range</p>;

const AcidResult = () => <p>Acid (%) <output /> - expected range</p>;

const Result = () => <section>
	<DilutionResult />
	<VolumeResult />
	<EthanolResult />
	<SugarResult />
	<AcidResult />
</section>;

export default Result;
