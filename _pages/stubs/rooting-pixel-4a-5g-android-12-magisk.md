---
title: Rooting Guide for Pixel 4a 5G on Android 12 with Magisk
tags:
  - draft
  - techdocs
description: "After much dissatisfaction with existing guides, I decided to write my own."
date: "2021-12-04"
last_modified_at: "2021-12-04"
sitemap: false
---

* TOC
{:toc}

## Overview

After a great deal of struggle, sifting through many comments on various threads, I figured I'd put together my own guide for how to root a Pixel 4a 5G that's already on Android 12 (November 2021 security patch), figuring I could articulate it more clearly. I was not interested in a custom recovery or custom ROM.

The instructions that follow are for Mac. I ran them on macOS 11.6.1 (Big Sur). It shouldn't be too hard to adapt for Windows or some Linux flavor.

I'll admit that some of this is a black box to me. There may be a more efficient way of doing this, but I'm sharing the process that worked for me. Obviously, you do this all at your own risk, both in terms of data loss and bricking your device.

## Prerequisites

_Always verify that you're installing tools and downloading software from reputable, official sources, appropriate to your specific device and environment. Don't take my word for it by using direct links below._

* a USB cable to connect your phone to your computer
* Android Platform Tools 31.0.3, which I installed using [Homebrew](https://brew.sh/){:target="&lowbar;blank"}: `brew install android-platform-tools`
* [the factory image appropriate for your phone](https://developers.google.com/android/images#bramble){:target="&lowbar;blank"}, which for me, given that I was on the November 2021 security patch and not on any of the carrier-specific builds, was [12.0.0 (SP1A.211105.003, Nov 2021)](https://dl.google.com/dl/android/aosp/bramble-sp1a.211105.003-factory-39b4b71c.zip){:target="&lowbar;blank"}
* the [Magisk Canary apk](https://raw.githubusercontent.com/topjohnwu/magisk-files/canary/app-debug.apk){:target="&lowbar;blank"}, which was build 23015 when I downloaded it from the [Magisk GitHub repo](https://github.com/topjohnwu/Magisk){:target="&lowbar;blank"}

## Unlock the Bootloader

## Install Magisk and Patch the Boot Image

## Reflash the Stock Firmware

## Flash the Magisk-Patched Boot Image

## Troubleshooting

## Further Reading
