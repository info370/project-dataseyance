# data-seyance - Narcan Pilot Study
## Should narcan be highly available? How does availability of Narcan affect opioid overdoses in specific areas?

Naloxone is a medication designed to rapidly reverse opioid overdose, and while it won't solve the opioid crisis, it can mean life or death for someone who is overdosing.

## Uncertainties
1. Are there enough data to answer this question accurately?
2. Are data collected elsewhere applicable to the place you are informing for?
3. Is this an insightful question?
4. Are there other confounding variables?
5. What other contexts are we missing in our analysis?

## Pilot Study
In order to answer some initial questions about uncertainty, we piloted a study to analyze the feasibility of our questsions and the applicabiility of our dataset. We were able to find a few openly availalable datasets from the state of Connecticut at data.gov, which is part of the open data initiative of the United States Governement. Specifically we found two initially relevant datasets: [Pharmacies offering Narcan, Evzio and other brands of Naloxone](https://catalog.data.gov/dataset/pharmacies-offering-narcan-evzio-and-other-brands-of-naloxone), and [Accidental Drug Related Deaths 2012-June 2017](https://catalog.data.gov/dataset/accidental-drug-related-deaths-january-2012-sept-2015). 

In 2015 the state of Connecticut passed legislation that allows pharmacists who have been trained/certified to prescribe and dispense Narcan directly to customers requesting it. Previously to this, perscriptions of Narcan were only allowed by Physicians or PA's.

As a first step to see some simple effects of this legislation, we analyzed the average number of deaths by opioids per month-year before and after October 1, 2015.

See [narcan.Rmd](https://github.com/info370/project-dataseyance/blob/master/narcan/narcan.Rmd) for code.

## Findings

This pilot study was highly innefective in making any conclusions about the effect of narcan availabilitiy on opioid overdoses. The trend of deaths per month is increasing at a significant rate, so there must be other factors that are influencing the death rates. This makes sense, given the wide amount of information showing that opioid use is increasing.

## Next steps

In order to find out how narcan has changed overdoses of opioids, we will need to involve other, more complex analysis techniques and models. Some initial ideas are to isolate the trend of overdoses over time, and see if the introduction of narcan has had any affect in the trend.
Additionally we will look to the geospacial data from this dataset, and see if we can corelate the pharmacies that are actually able to perscribe narcan vs those that are not.
