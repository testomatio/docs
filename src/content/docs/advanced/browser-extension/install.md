---
title: "Install and update"
type: article
---

Install the extension from the Chrome Web Store. Chrome 123 or newer.

## Install

1. Open [Testomat.io in the Chrome Web Store](https://chromewebstore.google.com/detail/testomatio/amcnjlghmkkjfaajanfeghpgbjakdcka)
   and click **Add to Chrome**, then **Add extension**.
2. Click the puzzle icon in Chrome's toolbar and pin **Testomat.io** with the
   pushpin:

   ![Pinning Testomat.io from the puzzle menu](img/install-pin.png)
3. Click the pinned icon — the panel opens and asks you to connect
   (**Connect to Testomat.io**). That is the next page: [Connect](connect.md).

## Update

Chrome updates the extension by itself. Your token, settings and unsent
results survive an update.

## If it didn't work

- **Chrome refuses to add it** — check your Chrome is 123 or newer
  (`chrome://settings/help`).

## Install from source

For developers: run the code from this repository instead of the store copy.
The source copy has the same ID as the store copy, so Chrome holds only one of
them: remove the store copy on `chrome://extensions` first. Removing it
deletes its token and settings, so you connect again.

1. Get the folder — either way works:
   - download the newest `testomat-io-<version>.zip` from
     [Releases](https://github.com/testomatio/browser-extension/releases) —
     the file under **Assets** without `-webstore` in its name (that one is
     the Chrome Web Store upload) — and unpack it, **or**

     ![The zip under Assets on the Releases page](img/install-release-zip.png)

   - `git clone https://github.com/testomatio/browser-extension.git`
2. Open `chrome://extensions` and switch on **Developer mode** (top right).
3. Click **Load unpacked**:

   ![Load unpacked on chrome://extensions](img/install-load-unpacked.png)

   …and pick the folder:
   - from the zip — the folder you unpacked;
   - from the clone — the **`extension/`** folder inside it, not the
     repository root.

   Either way, the right folder is the one with `manifest.json` directly
   inside.

4. Pin the icon and connect, as in steps 2–3 of [Install](#install).

There is nothing to build or install beyond that — the folder runs as is.

### Update a source copy

A source copy does not update itself. To get a new version:

1. Replace the folder contents: unpack a newer zip over the same folder, or
   `git pull` in the clone.
2. On `chrome://extensions`, press the reload (↻) icon on the Testomat.io
   card:

   ![The reload icon on the extension card](img/install-card-reload.png)

Your token, settings and unsent results survive the reload.

### If a source copy didn't work

- **"Load unpacked" is missing** — Developer mode is off; the switch is in
  the top right corner of `chrome://extensions`.
- **"Manifest file is missing or unreadable"** — you picked the repository
  root; pick the `extension/` folder inside it.
- **Updated, but behaves like the old version** — press reload (↻) on the
  extension's card; replacing the files alone is not enough.
