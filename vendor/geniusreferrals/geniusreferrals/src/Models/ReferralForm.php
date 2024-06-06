<?php
/*
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

namespace GeniusReferralsLib\Models;

use JsonSerializable;

/**
 * The referral's form
 */
class ReferralForm implements JsonSerializable
{
    /**
     * The referral's wrapper
     * @required
     * @var Referral $referral public property
     */
    public $referral;

    /**
     * Constructor to set initial or default values of member properties
     * @param Referral $referral Initialization value for $this->referral
     */
    public function __construct()
    {
        if (1 == func_num_args()) {
            $this->referral = func_get_arg(0);
        }
    }


    /**
     * Encode this object to JSON
     */
    public function jsonSerialize()
    {
        $json = array();
        $json['referral'] = $this->referral;

        return $json;
    }
}
