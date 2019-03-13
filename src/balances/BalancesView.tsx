import * as React from 'react';

import { theAppContext } from '../AppContext';
import * as styles from '../exchange/offerMake/OfferMakeForm.scss';
import { FlexLayoutRow } from '../utils/layout/FlexLayoutRow';
import { Muted } from '../utils/text/Text';

export class BalancesView extends React.Component<{}> {
  public render() {
    return (
      <div>
        <theAppContext.Consumer>
          { ({
               AssetOverviewViewRxTx,
               TaxExporterButtonTxRx
          }) =>
            <div>
              <FlexLayoutRow>
                <AssetOverviewViewRxTx />
              </FlexLayoutRow>
                {process.env.REACT_APP_TAX_EXPORTER_ENABLED === '1' &&
                <FlexLayoutRow>
                    <Muted className={styles.pickerDescription}>
                        Export your trade history into CSV format.
                    </Muted>
                    <TaxExporterButtonTxRx/>
                </FlexLayoutRow>}
            </div>
          }
        </theAppContext.Consumer>
      </div>
    );
  }
}
