import { ModalController } from '@ionic/angular';
import { GlobalService } from './../global.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var Stripe;

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss']
})
export class PaiementPage implements OnInit {
  constructor(private route: ActivatedRoute, private global: GlobalService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      console.log('My hash fragment is here => ', fragment);
      if (fragment == 'success') {
        this.global.toast('La planète vous remercie pour votre investissement !');
      }
    });

    var stripe = Stripe('pk_test_cMQm2DrzTCBsfFvdSwYD296k00Sx9SNFkT');

    var checkoutButton = document.getElementById('checkout-button-sku_FR3kvbqLPSnph3');
    checkoutButton.addEventListener('click', function() {
      // When the customer clicks on the button, redirect
      // them to Checkout.
      stripe
        .redirectToCheckout({
          items: [{ sku: 'sku_FR3kvbqLPSnph3', quantity: 1 }],

          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: 'https://www.joingaia.fr/joingaia-back/paiementreussi.php',
          cancelUrl: 'https://www.joingaia.fr/joingaia-back/paiementrate.php'
        })
        .then(function(result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
    });
  }

  back() {
    this.modalCtrl.dismiss();
  }
}
