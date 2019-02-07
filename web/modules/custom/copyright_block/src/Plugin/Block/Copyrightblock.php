<?php

namespace Drupal\copyright_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'copyrightblock' block.
 *
 * @Block(
 *  id = "copyrightblock",
 *  admin_label = @Translation("Copyrightblock"),
 * )
 */
class copyrightblock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
            'copyright_text_prefix' => ©,
          ] + parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['copyright_text_prefix'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Copyright text prefix'),
      '#default_value' => $this->configuration['copyright_text_prefix'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '4',
    ];
    $form['copyright_year'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Copyright year'),
      '#description' => $this->t('Copyright year. leave blank for the current year.'),
      '#default_value' => $this->configuration['copyright_year'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '5',
    ];
    $form['copyright_text_suffix'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Copyright text suffix'),
      '#description' => $this->t('Text after copyright year.'),
      '#default_value' => $this->configuration['copyright_text_suffix'],
      '#maxlength' => 64,
      '#size' => 64,
      '#weight' => '6',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['copyright_text_prefix'] = $form_state->getValue('copyright_text_prefix');
    $this->configuration['copyright_year'] = $form_state->getValue('copyright_year');
    $this->configuration['copyright_text_suffix'] = $form_state->getValue('copyright_text_suffix');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['copyrightblock_copyright_text_prefix']['#markup'] = '<p>' . $this->configuration['copyright_text_prefix'] . $this->configuration['copyright_year']  . $this->configuration['copyright_text_suffix'] . '</p>';

    return $build;
  }

}
