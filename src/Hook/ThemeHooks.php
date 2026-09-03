<?php

namespace Drupal\c_sharp_subtheme\Hook;

use Drupal\Core\Hook\Attribute\Hook;

class ThemeHooks {

  /**
   * Implements hook_preprocess_HOOK().
   */
  #[Hook('preprocess_block__c_sharp_subtheme_search')]
  #[Hook('preprocess_block__stanford_basic_search')]
  public function preprocessSearchBlock(&$variables) {
    $variables['placeholder'] = 'Search Shared Facilities';
  }

}
